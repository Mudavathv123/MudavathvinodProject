package com.example.artgallery.repository;

import java.util.ArrayList;
import java.util.List;

import com.example.artgallery.model.Artist;
import com.example.artgallery.model.Gallery;

public interface GalleryRepository {

    ArrayList<Gallery> getGalleries();

    Gallery getGalleryById(int galleryId);

    Gallery addGallery(Gallery gallery);

    Gallery updateGallery(Gallery gallery, int galleryId);

    void deleteGallery(int galleryId);

    List<Artist> getGalleryArtists(int galleryId);
}
