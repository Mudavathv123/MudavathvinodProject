package com.example.spotifyclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spotifyclone.model.Radio;
import com.example.spotifyclone.service.RadioService;

@RestController
@RequestMapping("/radioes")
@CrossOrigin(origins = "https://spotifyclonebyvinod.netlify.app/") 
// @CrossOrigin(origins = "http://localhost:5173/") 
public class RadioController {

    @Autowired
    private RadioService radioService;

    @GetMapping
    public ArrayList<Radio> getRadioes() {
        return radioService.getRadioes();
    }

    @GetMapping("/{radioId}")
    public Radio getRadioById(@PathVariable("radioId") int radioId) {
        return radioService.getRadioById(radioId);
    }

}
