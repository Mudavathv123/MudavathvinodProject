package com.example.findmyproject.controller;

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

import com.example.findmyproject.model.Project;
import com.example.findmyproject.model.Researcher;
import com.example.findmyproject.service.ResearcherJpaService;

@RestController
@RequestMapping("/researchers")
public class ResearcherController {

    @Autowired
    private ResearcherJpaService researcherJpaService;

    @GetMapping
    public ArrayList<Researcher> getResearchers() {
        return researcherJpaService.getResearchers();
    }

    @GetMapping("/{researherId}")
    public Researcher getResearcherById(@PathVariable("researherId") int researcherId) {
        return researcherJpaService.getResearcherById(researcherId);
    }

    @PostMapping
    public Researcher addResearcher(@RequestBody Researcher researcher) {
        return researcherJpaService.addResearcher(researcher);
    }

    @PutMapping("/{researcherId}")
    public Researcher updatResearcher(@RequestBody Researcher researcher,
            @PathVariable("researcherId") int researcherId) {
        return researcherJpaService.updatResearcher(researcher, researcherId);
    }

    @DeleteMapping("/{researcherId}")
    public void deleteResearcher(@PathVariable("researcherId") int researcherId) {
        researcherJpaService.deleteResearcher(researcherId);
    }

    @GetMapping("/{researcherId}/projects")
    public List<Project> getResearcherProjects(@PathVariable("researcherId") int researherId) {
        return researcherJpaService.getResearcherProjects(researherId);
    }

}
