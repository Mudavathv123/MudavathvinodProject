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
import com.example.university.model.Professor;
import com.example.university.model.Student;
import com.example.university.service.CourseJpaService;

@RestController
@RequestMapping("/courses")
public class CourseController {
    
    @Autowired
    private CourseJpaService courseJpaService;

    @GetMapping
    public ArrayList<Course> getCourses() {
        return courseJpaService.getCourses();
    }

    @GetMapping("/{courseId}")
    public Course getCourseById(@PathVariable("courseId") int courseId) {
        return courseJpaService.getCourseById(courseId);
    }

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseJpaService.addCourse(course);
    }

    @PutMapping("/{courseId}")
    public Course updateCourse(@PathVariable("courseId") int courseId, @RequestBody Course course) {
        return courseJpaService.updateCourse(courseId, course);
    }
    
    @DeleteMapping("/{courseId}")
    public void deleteCourse(@PathVariable("courseId") int courseId) {
        courseJpaService.deleteCourse(courseId);
    }

    @GetMapping("/{courseId}/professor")
    public Professor getCourseProfessor(@PathVariable("courseId") int courseId) {
        return courseJpaService.getCourseProfessor(courseId);
    }

    @GetMapping("/{courseId}/students")
    public List<Student> getCourStudents(@PathVariable("courseId") int courseId) {
        return courseJpaService.getCourseStudents(courseId);
    }

}
