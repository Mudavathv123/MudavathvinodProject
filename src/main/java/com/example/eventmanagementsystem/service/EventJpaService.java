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
import com.example.eventmanagementsystem.repository.EventJpaRepository;
import com.example.eventmanagementsystem.repository.SponsorJpaRepository;
import com.example.eventmanagementsystem.repository.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class EventJpaService implements EventRepository {

    @Autowired
    private EventJpaRepository eventJpaRepository;

    @Autowired
    private SponsorJpaRepository sponsorJpaRepository;

    @Override
    public ArrayList<Event> getEvents() {

        List<Event> events = eventJpaRepository.findAll();
        return new ArrayList<Event>(events);
    }

    @Override
    public Event getEventById(int eventId) {

        try {
            Event event = eventJpaRepository.findById(eventId).get();
            return event;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Event addEvent(Event event) {

        List<Integer> sponsorIds = new ArrayList<Integer>();

        for (Sponsor sponsor : event.getSponsors())
            sponsorIds.add(sponsor.getSponsorId());

        List<Sponsor> sponsors = sponsorJpaRepository.findAllById(sponsorIds);
        event.setSponsors(sponsors);

        for (Sponsor sponsor : sponsors)
            sponsor.getEvents().add(event);
        Event savedEvents = eventJpaRepository.save(event);
        sponsorJpaRepository.saveAll(sponsors);
        return savedEvents;
    }

    @Override
    public Event updateEvent(int eventId, Event event) {

        try {
            Event oldEvent = eventJpaRepository.findById(eventId).get();

            if (event.getEventName() != null)
                oldEvent.setEventName(event.getEventName());
            if (event.getDate() != null)
                oldEvent.setDate(event.getDate());
            if (event.getSponsors() != null) {

                List<Sponsor> oldSponsors = oldEvent.getSponsors();
                for (Sponsor sponsor : oldSponsors)
                    sponsor.getEvents().remove(oldEvent);
                sponsorJpaRepository.saveAll(oldSponsors);

                List<Integer> newSponsorIds = new ArrayList<Integer>();

                for (Sponsor sponsor : event.getSponsors())
                    newSponsorIds.add(sponsor.getSponsorId());

                List<Sponsor> newSponsors = sponsorJpaRepository.findAllById(newSponsorIds);
                for (Sponsor sponsor : newSponsors)
                    sponsor.getEvents().add(oldEvent);
                sponsorJpaRepository.saveAll(newSponsors);

                oldEvent.setSponsors(newSponsors);
            }
            return eventJpaRepository.save(oldEvent);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteEvent(int eventId) {

        try {

            Event event = eventJpaRepository.findById(eventId).get();

            List<Sponsor> sponsors = event.getSponsors();

            for (Sponsor sponsor : sponsors)
                sponsor.getEvents().remove(event);
            sponsorJpaRepository.saveAll(sponsors);
            eventJpaRepository.deleteById(eventId);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Sponsor> getEventSponsors(int eventId) {

        try {
            Event event = eventJpaRepository.findById(eventId).get();
            return event.getSponsors();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}