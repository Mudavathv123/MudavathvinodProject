package com.example.university.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.university.model.Course;
import com.example.university.model.Professor;
import com.example.university.repository.CourseJpaRepository;
import com.example.university.repository.ProfessorJpaRepository;
import com.example.university.repository.ProfessorRepository;


@Service
public class ProfessorJpaService  implements ProfessorRepository{

    @Autowired
    private ProfessorJpaRepository professorJpaRepository;

    @Autowired 
    private CourseJpaRepository courseJpaRepository;
    @Override
    public ArrayList<Professor> getProfessors() {
      List<Professor> professors =  professorJpaRepository.findAll();
      return new ArrayList<>(professors);
    }

    @Override
    public Professor getProfessorById(int professorId) {
        try {
            return professorJpaRepository.findById(professorId).get();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Professor addProfessor(Professor professor) {
       professorJpaRepository.save(professor);
       return  professor;
    }

    @Override
    public Professor updateProfessor(int professorId, Professor professor) {
        
        Professor exProfessor = getProfessorById(professorId);

        if(professor.getProfessorName() != null) 
            exProfessor.setProfessorName(professor.getProfessorName());
        if(professor.getDepartment() != null) 
            exProfessor.setDepartment(professor.getDepartment());
        professorJpaRepository.save(exProfessor);
        return exProfessor;
    }

    @Override
    public void deleteProfessor(int professorId) {
         Professor professor = getProfessorById(professorId);
         List<Course> courseList = courseJpaRepository.findByProfessor(professor);

         for(Course course : courseList) {
            course.setProfessor(null);
         }
         courseJpaRepository.saveAll(courseList);
          professorJpaRepository.deleteById(professorId);
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Course> getProfessorCourses(int professorId) {
       Professor professor = getProfessorById(professorId);
       return courseJpaRepository.findByProfessor(professor);
    }

}
