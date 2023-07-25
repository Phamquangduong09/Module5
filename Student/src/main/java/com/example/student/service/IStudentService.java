package com.example.student.service;

import com.example.student.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IStudentService extends IGenerateService<Student,Long>{
    Page<Student> findAllPage(Pageable pageable);
}
