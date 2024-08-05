package com.example.artgallery.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.artgallery.model.Art;
import com.example.artgallery.model.Artist;
import com.example.artgallery.repository.ArtJpaRepository;
import com.example.artgallery.repository.ArtRepository;
import com.example.artgallery.repository.ArtistJpaRepository;

@Service
public class ArtJpaService implements ArtRepository {

    @Autowired
    private ArtJpaRepository artJpaRepository;

    @Autowired
    private ArtistJpaRepository artistJpaRepository;

    @Override
    public ArrayList<Art> getArts() {
        List<Art> arts = artJpaRepository.findAll();
        return new ArrayList<>(arts);
    }

    @Override
    public Art getArtById(int artId) {
        try {
            Art art = artJpaRepository.findById(artId).get();
            return art;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Art addArt(Art art) {

        try {
            Artist artist = art.getArtist();
            int artistId = artist.getArtistId();
            Artist exiistingArtist = artistJpaRepository.findById(artistId).get();
            art.setArtist(exiistingArtist);
            artJpaRepository.save(art);
            return art;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "wrong ArtistId");
        }

    }

    @Override
    public Art updateArt(Art art, int artId) {
        try {
            Art existingArt = artJpaRepository.findById(artId).get();

            if (art.getArtTitle() != null)
                existingArt.setArtTitle(art.getArtTitle());
            if (art.getTheme() != null)
                existingArt.setTheme(art.getTheme());
            if (art.getArtist() != null) {
                Artist artist = art.getArtist();
                int artistId = artist.getArtistId();

                Artist existingArtist = artistJpaRepository.findById(artistId).get();
                existingArt.setArtist(existingArtist);
            }
            artJpaRepository.save(existingArt);
            return existingArt;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteArt(int artId) {
        try {
            artJpaRepository.deleteById(artId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public Artist getArtArtist(int artId) {
        try {
            Art art = artJpaRepository.findById(artId).get();
            return art.getArtist();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

}
