package com.isep.pamagace.message;

import com.isep.pamagace.reservation.IReservationService;
import com.isep.pamagace.reservation.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service("messageService")
@Transactional
public class MessageServiceImpl {
    @Autowired
    private IMessageService messageService;

    @RequestMapping(value = "api/public/reservation/post", method = RequestMethod.POST)
    public void postMessage(@RequestParam("id_user_receiver") int id_user_receiver,
                            @RequestParam("id_use_senderr") int id_user_sender,
                            @RequestParam("message") String message) throws Exception {
        messageService.postMessage(id_user_receiver, id_user_sender, message);
    }
}
