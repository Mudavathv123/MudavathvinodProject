package com.example.spotifyclone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.spotifyclone.model.Radio;
import com.example.spotifyclone.repository.RadioJpaRepository;
import com.example.spotifyclone.repository.RadioRepository;

@Service
public class RadioService implements RadioRepository{

    @Autowired
    private RadioJpaRepository radioJpaRepository;

    @Override
    public ArrayList<Radio> getRadioes() {
        List<Radio> radioes = radioJpaRepository.findAll();
        return new ArrayList<>(radioes);

    }

    @Override
    public Radio getRadioById(int radioId) {
        try {
           return  radioJpaRepository.findById(radioId).get();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
