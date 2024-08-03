package com.example.university.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.university.model.Course;
import com.example.university.model.Student;
import com.example.university.repository.CourseJpaRepository;
import com.example.university.repository.StudentJpaRepository;
import com.example.university.repository.StudentRepository;

@Service
public class StudentJpaService implements StudentRepository {

    @Autowired
    private StudentJpaRepository studentJpaRepository;

    @Autowired
    private CourseJpaRepository courseJpaRepository;

    @Override
    public ArrayList<Student> getStudents() {
        List<Student> students = studentJpaRepository.findAll();
        return new ArrayList<>(students);
    }

    @Override
    public Student getStudentById(int studentId) {
        try {
            return studentJpaRepository.findById(studentId).get();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Student addStudent(Student student) {

        List<Integer> courseIds = new ArrayList<>();

        for (Course course : student.getCourses()) {
            courseIds.add(course.getCourseId());
        }

        List<Course> courseList = courseJpaRepository.findAllById(courseIds);

         if(courseIds.size() != courseList.size()) 
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some courses are not found!");

        student.setCourses(courseList);

        for (Course course : courseList) {
            course.getStudents().add(student);
        }
        Student savedStudent = studentJpaRepository.save(student);
        courseJpaRepository.saveAll(courseList);

        return savedStudent;
    }

    @Override
    public Student updateStudent(int studentId, Student student) {

        Student exStudent = getStudentById(studentId);

        if (student.getStudentName() != null)
            exStudent.setStudentName(student.getStudentName());
        if (student.getEmail() != null)
            exStudent.setEmail(student.getEmail());
        if (student.getClass() != null) {

            List<Course> exCourses = exStudent.getCourses();
            for (Course course : exCourses) {
                course.getStudents().remove(exStudent);
            }

            courseJpaRepository.saveAll(exCourses);

            List<Integer> courseIds = new ArrayList<>();

            for (Course course : student.getCourses()) {
                courseIds.add(course.getCourseId());
            }

            List<Course> courseList = courseJpaRepository.findAllById(courseIds);

             if(courseIds.size() != courseList.size()) 
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some courses are not found!");

            for (Course course : courseList) {
                course.getStudents().add(exStudent);
            }
            courseJpaRepository.saveAll(courseList);
            exStudent.setCourses(courseList);
        }
        studentJpaRepository.save(exStudent);
        return exStudent;
    }

    @Override
    public void deleteStudent(int studentId) {
        Student student = getStudentById(studentId);
        List<Course> courses = student.getCourses();

        for (Course course : courses) {
            course.getStudents().remove(student);
        }
        courseJpaRepository.saveAll(courses);
        studentJpaRepository.deleteById(studentId);

        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Course> getStudenCourses(int studentId) {
        Student student = getStudentById(studentId);
        return student.getCourses();
    }

}
