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

import com.example.spotifyclone.model.Albums;
import com.example.spotifyclone.service.AlbumbService;

@RestController
@RequestMapping("/albums")
@CrossOrigin(origins = "https://spotifyclonebyvinod.netlify.app/")
// @CrossOrigin(origins = "http://localhost:5173/")
public class AlbumsController {

    @Autowired
    private AlbumbService albumbService;

    @GetMapping
    public ArrayList<Albums> getAlbums() {
        return albumbService.getAlbums();
    }

    @GetMapping("/{albumId}")
    public Albums getAlbumById(@PathVariable("albumId") int albumId) {
        return albumbService.getAlbumbsById(albumId);
    }

    @PostMapping
    public Albums addAlbum(@RequestBody Albums album) {
        return albumbService.addAlbumb(album);
    }
}
