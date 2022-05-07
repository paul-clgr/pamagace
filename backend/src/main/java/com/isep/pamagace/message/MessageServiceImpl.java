package com.isep.pamagace.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("messageService")
@Transactional
public class MessageServiceImpl implements IMessageService {
    @Autowired
    private IMessageDao messageDao;
}
