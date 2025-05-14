package de.gregorstallmeister.mm.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/music")
@RequiredArgsConstructor
public class MusicController {

    @GetMapping("/playlists")
    public String getAllPlaylists() {
        return "Test";
    }
}
