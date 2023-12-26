/*
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
package com.example.player.service;

import com.example.player.model.Player;
import com.example.player.model.PlayerRowMapper;
import com.example.player.repository.PlayerRepository;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class PlayerH2Service implements PlayerRepository {

    @Autowired
    private JdbcTemplate db;

    @Override
    public ArrayList<Player> getPlayers() {

        List<Player> players = db.query("select * from team", new PlayerRowMapper());
        ArrayList<Player> allPlayers = new ArrayList<>(players);
        return allPlayers;
    }

    @Override
    public Player getPlayerById(int playerId) {
        try {
            Player player = db.queryForObject("select * from team where playerid = ? ", new PlayerRowMapper(),
                    playerId);
            return player;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Player addNewPlayer(Player player) {

        db.update("insert into team(playername,jerseynumber,role) values(?,?,?)",
                player.getPlayerName(), player.getJerseyNumber(), player.getRole());

        Player updatedPlayer = db.queryForObject(
                "select * from team where playername = ? and jerseynumber = ? and role = ? ",
                new PlayerRowMapper(), player.getPlayerName(), player.getJerseyNumber(), player.getRole());

        return updatedPlayer;
    }

    @Override
    public Player updatePlayer(int playerId, Player player) {

        try {

            if (player.getPlayerName() != null)
                db.update("update team set playername = ? where playerid = ?", player.getPlayerName(),
                        playerId);
            if (player.getJerseyNumber() != 0)
                db.update("update team set jerseynumber = ? where playerid = ?", player.getJerseyNumber(),
                        playerId);
            if (player.getRole() != null)
                db.update("update team set role = ? where playerid = ?", player.getRole(), playerId);

            return getPlayerById(playerId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @Override
    public void deletePlayer(int playerId) {
        try {
            db.update("delete from team where playerid = ?", playerId);
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}