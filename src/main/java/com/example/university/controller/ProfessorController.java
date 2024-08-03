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
import com.example.university.service.ProfessorJpaService;

@RestController
@RequestMapping("/professors")
public class ProfessorController {

    @Autowired
    private ProfessorJpaService professorJpaService;

    @GetMapping
    public ArrayList<Professor> getProfessors() {
        return professorJpaService.getProfessors();
    }

    @GetMapping("/{professorId}")
    public Professor getProfessorById(@PathVariable("professorId") int professorId) {
        return professorJpaService.getProfessorById(professorId);
    }

    @PostMapping
    public Professor addProfessor(@RequestBody Professor professor) {
        return professorJpaService.addProfessor(professor);
    }

    @PutMapping("/{professorId}")
    public Professor updateProfessor(@PathVariable("professorId") int professorId, @RequestBody Professor professor) {
        return professorJpaService.updateProfessor(professorId, professor);
    }

    @DeleteMapping("/{professorId}")
    public void deleteProfessor(@PathVariable("professorId") int professorId) {
        professorJpaService.deleteProfessor(professorId);
    }

    @GetMapping("/{professorId}/courses")
    public List<Course> getprofessCourses(@PathVariable("professorId") int professorId) {
        return professorJpaService.getProfessorCourses(professorId);
    }


}
