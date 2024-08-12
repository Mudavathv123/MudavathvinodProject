package com.example.spotifyclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spotifyclone.model.Songs;
import com.example.spotifyclone.service.SongService;

@RestController
@RequestMapping("/songs")
@CrossOrigin(origins = "https://spotifyclonebyvinod.netlify.app/") 
// @CrossOrigin(origins = "http://localhost:5173/") 
public class SongsController {

    @Autowired
    private SongService songService;

    @GetMapping
    public ArrayList<Songs> getSongs(){
        return songService.getSongs();
    }

    @GetMapping("/{songId}")
    public Songs getSongById(@PathVariable("songId") int songId) {
        return songService.getSongById(songId);
    }

    @PostMapping
    public Songs addSong(@RequestBody Songs song) {
        return songService.addSong(song);
    }
}
