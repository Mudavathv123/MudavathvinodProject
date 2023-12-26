/*
 * 
 * You can use the following import statements
 * 
 * import org.springframework.web.bind.annotation.*;
 * import java.util.*;
 *
 */

// Write your code here

package com.example.song.controller;

import com.example.song.model.Song;
import com.example.song.service.SongH2Service;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class SongController {

    @Autowired
    private SongH2Service songService;

    @GetMapping("/songs")
    public ArrayList<Song> getSongs() {
        return songService.getSongs();
    }

}