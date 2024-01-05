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

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.song.model.Song;
import com.example.song.service.SongJpaService;
import java.util.ArrayList;

@RestController
public class SongController {

    @Autowired
    private SongJpaService songJpaService;

    @GetMapping("/songs")
    public ArrayList<Song> getSongs() {
        return songJpaService.getSongs();
    }

}