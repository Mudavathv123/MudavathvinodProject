package com.example.spotifyclone.repository;

import java.util.ArrayList;

import com.example.spotifyclone.model.Albums;

public interface AlbumbsRepository {

    ArrayList<Albums> getAlbums();

    Albums getAlbumbsById(int albumId);

    Albums addAlbumb(Albums albums);
}
