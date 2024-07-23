package com.example.spotifyclone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.spotifyclone.model.Songs;
import com.example.spotifyclone.repository.SongsJpaRepository;
import com.example.spotifyclone.repository.SongsRepository;

@Service
public class SongService implements SongsRepository{

    @Autowired
    private SongsJpaRepository songsJpaRepository;

    @Override
    public ArrayList<Songs> getSongs() {
        List<Songs> songs = songsJpaRepository.findAll();
        return new ArrayList<>(songs);
    }

    @Override
    public Songs getSongById(int songId) {
        try{
            Songs song = songsJpaRepository.findById(songId).get();
            return song;
        }catch(Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Songs addSong(Songs songs) {
        return songsJpaRepository.save(songs);
    }

}
