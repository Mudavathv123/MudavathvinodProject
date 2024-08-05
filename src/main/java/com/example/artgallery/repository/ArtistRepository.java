package com.example.artgallery.repository;

import java.util.ArrayList;
import java.util.List;

import com.example.artgallery.model.Art;
import com.example.artgallery.model.Artist;
import com.example.artgallery.model.Gallery;

public interface ArtistRepository {

    ArrayList<Artist> getArtists();

    Artist getArtistById(int artistId);

    Artist addArtist(Artist artist);

    Artist updateArtist(Artist artist, int artistId);

    void deleteArtist(int artistId);

    List<Gallery> getArtistGalleries(int artistId);

    List<Art> getArtArtists(int artistId);
}
