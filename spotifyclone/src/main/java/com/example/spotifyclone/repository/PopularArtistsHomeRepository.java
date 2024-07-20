package com.example.spotifyclone.repository;

import java.util.ArrayList;

import com.example.spotifyclone.model.PopularArtistHome;

public interface PopularArtistsHomeRepository {

    ArrayList<PopularArtistHome> getArtists();

    PopularArtistHome getArtistById(int artistId);

    PopularArtistHome addArtist(PopularArtistHome popularArtistHome);
}
