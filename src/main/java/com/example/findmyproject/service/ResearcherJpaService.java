package com.example.findmyproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.findmyproject.model.Project;
import com.example.findmyproject.model.Researcher;
import com.example.findmyproject.repository.ProjectJpaRepository;
import com.example.findmyproject.repository.ResearcherJpaRepository;
import com.example.findmyproject.repository.ResearcherRepository;

@Service
public class ResearcherJpaService implements ResearcherRepository {

    @Autowired
    private ResearcherJpaRepository researcherJpaRepository;

    @Autowired
    private ProjectJpaRepository projectJpaRepository;

    @Override
    public ArrayList<Researcher> getResearchers() {
        List<Researcher> researchers = researcherJpaRepository.findAll();
        return new ArrayList<>(researchers);
    }

    @Override
    public Researcher getResearcherById(int researcherId) {

        try {
            Researcher researcher = researcherJpaRepository.findById(researcherId).get();
            return researcher;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Researcher addResearcher(Researcher researcher) {
        try {

            List<Integer> projectIds = new ArrayList<>();

            for (Project project : researcher.getProjects()) {
                projectIds.add(project.getProjectId());
            }

            List<Project> projects = projectJpaRepository.findAllById(projectIds);

            if (projectIds.size() != projects.size())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Some project are not found!");
            researcher.setProjects(projects);
            researcherJpaRepository.save(researcher);
            return researcher;
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Researcher updatResearcher(Researcher researcher, int researcherId) {

        try {
            Researcher existingResearcher = researcherJpaRepository.findById(researcherId).get();

            if (researcher.getResearcherName() != null)
                existingResearcher.setResearcherName(researcher.getResearcherName());
            if (researcher.getSpecialization() != null)
                existingResearcher.setSpecialization(researcher.getSpecialization());
            if (researcher.getProjects() != null) {
                List<Integer> projectIds = new ArrayList<>();

                for (Project project : researcher.getProjects()) {
                    projectIds.add(project.getProjectId());
                }

                List<Project> projects = projectJpaRepository.findAllById(projectIds);

                if (projectIds.size() != projects.size())
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Some projects are not found!");
                existingResearcher.setProjects(projects);
            }
            researcherJpaRepository.save(existingResearcher);
            return existingResearcher;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteResearcher(int researcherId) {
        try {
            researcherJpaRepository.deleteById(researcherId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Project> getResearcherProjects(int researherId) {
        try {
            Researcher researcher = researcherJpaRepository.findById(researherId).get();
            return researcher.getProjects();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
