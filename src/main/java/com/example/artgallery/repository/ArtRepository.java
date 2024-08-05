package com.example.artgallery.repository;

import java.util.ArrayList;

import com.example.artgallery.model.Art;
import com.example.artgallery.model.Artist;

public interface ArtRepository {

    ArrayList<Art> getArts();

    Art getArtById(int artId);

    Art addArt(Art art);

    Art updateArt(Art art, int artId);

    void deleteArt(int artId);

    Artist getArtArtist(int artId);
}
