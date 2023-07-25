package com.example.student.service.impl;

import com.example.student.model.Student;
import com.example.student.repository.IStudentRepository;
import com.example.student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService {
    @Autowired
    public IStudentRepository iStudentRepository;

    @Override
    public List<Student> findAll() {
        return iStudentRepository.findAll();
    }

    @Override
    public Optional<Student> findOne(Long aLong) {
        return iStudentRepository.findById(aLong);
    }

    @Override
    public void save(Student student) {
        iStudentRepository.save(student);
    }

    @Override
    public void delete(Long aLong) {
        iStudentRepository.deleteById(aLong);
    }

    @Override
    public Page<Student> findAllPage(Pageable pageable) {
        return iStudentRepository.findAll(pageable);
    }
}
