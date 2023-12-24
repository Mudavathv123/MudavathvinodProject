// Write your code here

package com.example.song;

import java.util.ArrayList;

public interface SongRepository {

    ArrayList<Song> getSongs();

    Song addNewSong(Song song);

    Song getSongById(int songId);

    Song updateSong(Song song, int songId);

    void deleteSong(int songId);
}