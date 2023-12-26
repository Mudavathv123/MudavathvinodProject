/*
 * 
 * You can use the following import statements
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.jdbc.core.JdbcTemplate;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * import java.util.ArrayList;
 * 
 */

// Write your code here

package com.example.song.service;

import com.example.song.model.Song;
import com.example.song.repository.SongRepository;
import com.example.song.model.SongRowMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

public class SongH2Service implements SongRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public ArrayList<Song> getSongs() {

        List<Song> listOfSongs = jdbcTemplate.query("select * from playlist", new SongRowMapper());
        ArrayList<Song> songs = new ArrayList<Song>(listOfSongs);
        return songs;
    }
}