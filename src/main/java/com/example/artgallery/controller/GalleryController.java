package com.example.artgallery.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.artgallery.model.Artist;
import com.example.artgallery.model.Gallery;
import com.example.artgallery.service.GalleryJpaService;

@RestController
@RequestMapping("/galleries")
public class GalleryController {

    @Autowired
    private GalleryJpaService galleryJpaService;

    @GetMapping
    public ArrayList<Gallery> getGalleries() {
        return galleryJpaService.getGalleries();
    }

    @GetMapping("/{galleryId}")
    public Gallery getGalleryById(@PathVariable("galleryId") int galleryId) {
        return galleryJpaService.getGalleryById(galleryId);
    }

    @PostMapping
    public Gallery addGallery(@RequestBody Gallery gallery) {
        return galleryJpaService.addGallery(gallery);
    }

    @PutMapping("/{galleryId}")
    public Gallery updatGallery(@RequestBody Gallery gallery, @PathVariable("galleryId") int galleryId) {
        return galleryJpaService.updateGallery(gallery, galleryId);
    }

    @DeleteMapping("/{galleryId}")
    public void deleteGallery(@PathVariable("galleryId") int galleryId) {
        galleryJpaService.deleteGallery(galleryId);
    }

    @GetMapping("/{galleryId}/artists")
    public List<Artist> getGalleryArtists(@PathVariable("galleryId") int galleryId) {
        return galleryJpaService.getGalleryArtists(galleryId);
    }
}
