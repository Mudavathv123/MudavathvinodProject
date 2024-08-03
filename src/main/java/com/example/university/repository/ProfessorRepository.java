package com.example.university.repository;

import java.util.ArrayList;
import java.util.List;

import com.example.university.model.Course;
import com.example.university.model.Professor;

public interface ProfessorRepository {

    ArrayList<Professor> getProfessors();

    Professor getProfessorById(int professorId);

    Professor addProfessor(Professor professor);

    Professor updateProfessor(int professorId, Professor professor);

    void deleteProfessor(int professorId);

    List<Course> getProfessorCourses(int professorId);

}
