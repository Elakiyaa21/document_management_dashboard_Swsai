package backend.service;

import backend.entity.Notification;
import backend.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public Notification createNotification(String message) {

        Notification notification =
                Notification.builder()
                        .message(message)
                        .isRead(false)
                        .createdAt(LocalDateTime.now())
                        .build();

        return notificationRepository.save(notification);
    }

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }
}