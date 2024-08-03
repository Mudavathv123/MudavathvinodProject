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
import com.example.findmyproject.repository.ProjectRepository;
import com.example.findmyproject.repository.ResearcherJpaRepository;

@Service
public class ProjectJpaService implements ProjectRepository {

    @Autowired
    private ProjectJpaRepository projectJpaRepository;

    @Autowired
    private ResearcherJpaRepository researcherJpaRepository;

    @Override
    public ArrayList<Project> getProjects() {
        List<Project> projects = projectJpaRepository.findAll();
        return new ArrayList<>(projects);
    }

    @Override
    public Project getProjectById(int projectId) {
        try {
            Project project = projectJpaRepository.findById(projectId).get();
            return project;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Project addProject(Project project) {

        List<Integer> researcherIds = new ArrayList<>();

        for (Researcher researcher : project.getResearchers()) {
            researcherIds.add(researcher.getResearcherId());
        }

        List<Researcher> researchers = researcherJpaRepository.findAllById(researcherIds);

        if (researcherIds.size() != researchers.size())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some researchers are not found!");

        project.setResearchers(researchers);

        for (Researcher researcher : researchers) {
            researcher.getProjects().add(project);
        }

        Project savedProject = projectJpaRepository.save(project);

        researcherJpaRepository.saveAll(researchers);
        return savedProject;
    }

    @Override
    public Project updaProject(Project project, int projectId) {

            Project existingProject = getProjectById(projectId);
            if (project.getProjectName() != null)
                existingProject.setProjectName(project.getProjectName());
            if (project.getBudget() != 0)
                existingProject.setBudget(project.getBudget());
            if (project.getResearchers() != null) {

                List<Researcher> researchers = existingProject.getResearchers();

                for (Researcher researcher : researchers) {
                    researcher.getProjects().remove(existingProject);
                }

                researcherJpaRepository.saveAll(researchers);

                List<Integer> researcherIds = new ArrayList<>();

                for (Researcher researcher : project.getResearchers()) {
                    researcherIds.add(researcher.getResearcherId());
                }

                List<Researcher> newrResearchers = researcherJpaRepository.findAllById(researcherIds);

                if (researcherIds.size() != newrResearchers.size())
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some researchers are not found!");

                for (Researcher researcher : newrResearchers) {
                    researcher.getProjects().add(existingProject);
                }

                researcherJpaRepository.saveAll(newrResearchers);

                existingProject.setResearchers(newrResearchers);
            }
            projectJpaRepository.save(existingProject);
            return existingProject;
    }

    @Override
    public void deleteProject(int projectId) {
        try {
            Project project = projectJpaRepository.findById(projectId).get();

            List<Researcher> researchers = project.getResearchers();

            for (Researcher researcher : researchers) {
                researcher.getProjects().remove(project);
            }

            researcherJpaRepository.saveAll(researchers);
            projectJpaRepository.deleteById(projectId);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Researcher> getProjectResearchers(int projectId) {
        try {
            Project project = projectJpaRepository.findById(projectId).get();
            return project.getResearchers();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
