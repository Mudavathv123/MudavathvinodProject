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

import com.example.spotifyclone.model.PopularArtistHome;
import com.example.spotifyclone.service.PopularArtistsHomeService;

@RestController
@RequestMapping("/artists")
@CrossOrigin(origins = "https://spotifyclonebyvinod.netlify.app/") 

public class PopularArtistsHomeController {

    @Autowired
    private PopularArtistsHomeService popularArtistsHomeService;

    @GetMapping
    public ArrayList<PopularArtistHome> getArtists() {
        return popularArtistsHomeService.getArtists();
    }

    @GetMapping("/{artistId}")
    public PopularArtistHome getArtistById(@PathVariable("artistId") int artistId) {
        return popularArtistsHomeService.getArtistById(artistId);
    }

    @PostMapping
    public PopularArtistHome addArtist(@RequestBody PopularArtistHome popularArtistHome) {
        return popularArtistsHomeService.addArtist(popularArtistHome);
    }
}
