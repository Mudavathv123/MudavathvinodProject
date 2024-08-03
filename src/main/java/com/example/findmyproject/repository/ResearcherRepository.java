package com.example.findmyproject.repository;

import java.util.ArrayList;
import java.util.List;

import com.example.findmyproject.model.Project;
import com.example.findmyproject.model.Researcher;

public interface ResearcherRepository {

    ArrayList<Researcher> getResearchers();

    Researcher getResearcherById(int researcherId);

    Researcher addResearcher(Researcher researcher);

    Researcher updatResearcher(Researcher researcher, int researcherId);

    void deleteResearcher(int researcherId);

    List<Project> getResearcherProjects(int researherId);
}
