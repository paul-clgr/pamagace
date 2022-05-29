package com.isep.pamagace.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MessageRestController {
    @Autowired
    private IMessageDao messageDao;

    @Autowired
    private IMessageService messageService;

    @RequestMapping(value = "api/public/message/post", method = RequestMethod.POST)
    public void postMessage(@RequestParam("id_user_receiver") int id_user_receiver,
                            @RequestParam("id_use_sender") int id_user_sender,
                            @RequestParam("message") String message) throws Exception {
        messageService.postMessage(id_user_receiver, id_user_sender, message);
    }

    @RequestMapping(value = "api/public/message/get/all", method = RequestMethod.GET)
    public List<Message> getMessages() {
        return messageDao.findAllMessages();
    }

    @RequestMapping(value = "api/public/message/get/user/inbox/{id_user}", method = RequestMethod.GET)
    public List<Message> getUserInbox(@PathVariable("id_user") int id_user) {
        return messageDao.findAllUserInbox(id_user);
    }

    @RequestMapping(value = "api/public/message/get/user/outbox/{id_user}", method = RequestMethod.GET)
    public List<Message> getUserOutbox(@PathVariable("id_user") int id_user) {
        return messageDao.findAllUserOutbox(id_user);
    }

    @RequestMapping(value = "api/public/message/get/message/{id_message}", method = RequestMethod.GET)
    public Message getMessage(@PathVariable("id_message") int id_message) {
        return messageDao.findMessage(id_message);
    }


}
