package com.example.university.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.university.model.Course;
import com.example.university.model.Student;
import com.example.university.service.StudentJpaService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentJpaService studentJpaService;

    @GetMapping
    public ArrayList<Student> getStudents() {
        return studentJpaService.getStudents();
    }

    @GetMapping("/{studentId}")
    public Student getStudentById(@PathVariable("studentId") int studentId) {
        return studentJpaService.getStudentById(studentId);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentJpaService.addStudent(student);
    }

    @PutMapping("/{studentId}")
    public Student updateStudent(@PathVariable("studentId") int studentId, @RequestBody Student student) {
        return studentJpaService.updateStudent(studentId, student);
    }

    @DeleteMapping("/{studentId}")
    public void deleteStudent(@PathVariable("studentId") int studentId) {
        studentJpaService.deleteStudent(studentId);
    }

    @GetMapping("/{studentId}/courses")
    public List<Course> getStudentCourses(@PathVariable("studentId") int studentId) {
        return studentJpaService.getStudenCourses(studentId);
    }
    
}
