package com.example.spotifyclone.repository;

import java.util.ArrayList;

import com.example.spotifyclone.model.Radio;

public interface RadioRepository {

    ArrayList<Radio> getRadioes();

    Radio getRadioById(int radioId);

}
