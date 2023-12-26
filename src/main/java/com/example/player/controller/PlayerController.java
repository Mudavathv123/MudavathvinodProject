/*
 * 
 * You can use the following import statemets
 * 
 * import org.springframework.web.bind.annotation.*;
 * import java.util.*;
 * 
 */

package com.example.player.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import com.example.player.model.Player;
import com.example.player.service.PlayerH2Service;

@RestController
public class PlayerController {

    @Autowired
    private PlayerH2Service playerH2Service;

    @GetMapping("/players")
    public ArrayList<Player> getPlayers() {
        return playerH2Service.getPlayers();
    }

    @GetMapping("/players/{playerId}")
    public Player getPlayerById(@PathVariable("playerId") int playerId) {
        return playerH2Service.getPlayerById(playerId);
    }

    @PostMapping("/players")
    public Player addNewPlayer(@RequestBody Player player) {
        return playerH2Service.addNewPlayer(player);
    }

    @PutMapping("/players/{playerId}")
    public Player updatePlayer(@PathVariable("playerId") int playerId, @RequestBody Player player) {
        return playerH2Service.updatePlayer(playerId, player);
    }

    @DeleteMapping("/players/{playerId}")
    public void deletePlayer(@PathVariable("playerId") int playerId) {
        playerH2Service.deletePlayer(playerId);
    }
}