package com.example.university.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.university.model.Course;
import com.example.university.model.Professor;
import com.example.university.model.Student;
import com.example.university.repository.CourseJpaRepository;
import com.example.university.repository.CourseRepository;
import com.example.university.repository.ProfessorJpaRepository;
import com.example.university.repository.StudentJpaRepository;

@Service
public class CourseJpaService implements CourseRepository {

    @Autowired
    private CourseJpaRepository courseJpaRepository;

    @Autowired
    private ProfessorJpaRepository professorJpaRepository;

    @Autowired
    private StudentJpaRepository studentJpaRepository;

    @Override
    public ArrayList<Course> getCourses() {
        List<Course> courses = courseJpaRepository.findAll();
        return new ArrayList<>(courses);
    }

    @Override
    public Course getCourseById(int courseId) {
        try {
            return courseJpaRepository.findById(courseId).get();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @Override
    public Course addCourse(Course course) {

        try {
            Professor professor = course.getProfessor();
            int professorId = professor.getProfessorId();

            Professor newProfessor = professorJpaRepository.findById(professorId).get();
            course.setProfessor(newProfessor);

            List<Integer> studentIds = new ArrayList<>();

            for (Student student : course.getStudents()) {
                studentIds.add(student.getStudentId());
            }

            List<Student> newStudents = studentJpaRepository.findAllById(studentIds);

            if (studentIds.size() != newStudents.size())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some students are not found!");

            course.setStudents(newStudents);

            courseJpaRepository.save(course);
            return course;
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "professor is not found!");
        }

    }

    @Override
    public Course updateCourse(int courseId, Course course) {
        Course exCourse = getCourseById(courseId);

        if (course.getCourseName() != null)
            exCourse.setCourseName(course.getCourseName());
        if (course.getCredits() != 0)
            exCourse.setCredits(course.getCredits());
        if (course.getProfessor() != null) {
            try {
                Professor professor = course.getProfessor();
                int professorId = professor.getProfessorId();

                Professor newProfessor = professorJpaRepository.findById(professorId).get();
                exCourse.setProfessor(newProfessor);
            } catch (Exception e) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "professor is not found!");
            }

        }

        if (course.getStudents() != null) {
            List<Integer> studentIds = new ArrayList<>();

            for (Student student : course.getStudents()) {
                studentIds.add(student.getStudentId());
            }

            List<Student> newStudents = studentJpaRepository.findAllById(studentIds);

            if (studentIds.size() != newStudents.size())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some students are not found!");

            exCourse.setStudents(newStudents);

        }

        courseJpaRepository.save(exCourse);
        return exCourse;
    }

    @Override
    public void deleteCourse(int courseId) {
        Course course = getCourseById(courseId);

        List<Student> students = course.getStudents();
        for(Student student : students) {
            student.getCourses().remove(course);
        }
        studentJpaRepository.saveAll(students);
        courseJpaRepository.deleteById(courseId);
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public Professor getCourseProfessor(int courseId) {
        Course course = getCourseById(courseId);
        return course.getProfessor();
    }

    @Override
    public List<Student> getCourseStudents(int courseId) {
        Course course = getCourseById(courseId);
        return course.getStudents();
    }

}
