/*
 * You can use the following import statements
 *
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * 
 * import java.util.*;
 *
 */

// Write your code here

package com.example.eventmanagementsystem.service;

import java.util.ArrayList;
import java.util.List;

import com.example.eventmanagementsystem.model.Event;
import com.example.eventmanagementsystem.model.Sponsor;
import com.example.eventmanagementsystem.repository.SponsorRepository;
import com.example.eventmanagementsystem.repository.SponsorJpaRepository;
import com.example.eventmanagementsystem.repository.EventJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.NoSuchElementException;

@Service
public class SponsorJpaService implements SponsorRepository {

    @Autowired
    private SponsorJpaRepository sponsorJpaRepository;

    @Autowired
    private EventJpaRepository eventJpaRepository;

    @Override
    public ArrayList<Sponsor> getSponsors() {

        List<Sponsor> sponsors = sponsorJpaRepository.findAll();
        return new ArrayList<Sponsor>(sponsors);
    }

    @Override
    public Sponsor getSponsorById(int sponsorId) {

        try {
            Sponsor sponsor = sponsorJpaRepository.findById(sponsorId).get();
            return sponsor;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Sponsor addSponsor(Sponsor sponsor) {

        List<Integer> eventIds = new ArrayList<Integer>();

        for (Event event : sponsor.getEvents())
            eventIds.add(event.getEventId());

        List<Event> events = eventJpaRepository.findAllById(eventIds);

        if (events.size() != eventIds.size())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some of events are not found!!");

        sponsor.setEvents(events);
        sponsorJpaRepository.save(sponsor);
        return sponsor;

    }

    @Override
    public Sponsor updateSponsor(int sponsorId, Sponsor sponsor) {

        try {
            Sponsor oldSponsor = sponsorJpaRepository.findById(sponsorId).get();

            if (sponsor.getSponsorName() != null)
                oldSponsor.setSponsorName(sponsor.getSponsorName());
            if (sponsor.getIndustry() != null)
                oldSponsor.setIndustry(sponsor.getIndustry());
            if (sponsor.getEvents() != null) {
                List<Integer> eventIds = new ArrayList<Integer>();

                for (Event event : sponsor.getEvents())
                    eventIds.add(event.getEventId());

                List<Event> events = eventJpaRepository.findAllById(eventIds);

                if (events.size() != eventIds.size())
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some of events are not found!!");

                oldSponsor.setEvents(events);

            }
            sponsorJpaRepository.save(oldSponsor);
            return oldSponsor;
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Wrong sponsorId");
        }
    }

    @Override
    public void deleteSponsor(int sponsorId) {

        try {
            sponsorJpaRepository.deleteById(sponsorId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);

    }

    @Override
    public List<Event> getSponsorEvents(int sponsorId) {
        try {
            Sponsor sponsor = sponsorJpaRepository.findById(sponsorId).get();
            return sponsor.getEvents();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}