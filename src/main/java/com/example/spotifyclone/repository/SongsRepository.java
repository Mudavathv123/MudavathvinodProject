package com.example.spotifyclone.repository;

import java.util.ArrayList;

import com.example.spotifyclone.model.Songs;

public interface SongsRepository {

    ArrayList<Songs> getSongs();

    Songs getSongById(int songId);

    Songs addSong(Songs songs);
}
