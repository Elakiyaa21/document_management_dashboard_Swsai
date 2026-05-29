package backend.service;

import backend.entity.Document;
import backend.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final NotificationService notificationService;

    private final String UPLOAD_DIR =
            System.getProperty("user.dir") + "/uploads/";

    public Document uploadFile(MultipartFile file) throws IOException {

        File uploadDir = new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        String filePath = UPLOAD_DIR + file.getOriginalFilename();

        System.out.println("Saving file to: " + filePath);

        file.transferTo(new File(filePath));

        Document document = Document.builder()
                .fileName(file.getOriginalFilename())
                .fileType(file.getContentType())
                .fileSize(file.getSize())
                .filePath(filePath)
                .status("COMPLETED")
                .uploadDate(LocalDateTime.now())
                .build();

        Document savedDocument = documentRepository.save(document);

        notificationService.createNotification(
                file.getOriginalFilename() + " uploaded successfully"
        );

        return savedDocument;
    }

    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }
}