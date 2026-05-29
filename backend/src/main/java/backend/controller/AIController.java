package backend.controller;

import backend.dto.ChatRequest;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin("*")
public class AIController {

    @PostMapping("/ask")
    public Map<String, String> askQuestion(
            @RequestBody ChatRequest request) {

        Map<String, String> response = new HashMap<>();

        String question =
                request.getQuestion().toLowerCase();

        if(question.contains("leave")) {
            response.put(
                    "answer",
                    "Employees are entitled to annual leave as per company policy."
            );
        }
        else if(question.contains("wfh")) {
            response.put(
                    "answer",
                    "Employees may work from home with manager approval."
            );
        }
        else if(question.contains("insurance")) {
            response.put(
                    "answer",
                    "Health insurance benefits are available to all full-time employees."
            );
        }
        else {
            response.put(
                    "answer",
                    "Information found in company documents."
            );
        }

        return response;
    }
}