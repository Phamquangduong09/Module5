package com.example.student.controller;

import com.example.student.model.Student;
import com.example.student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private IStudentService iStudentService;
//
//    @Value("${upload-path}")
//    private String upload;

    @GetMapping
    public ResponseEntity<Page<Student>> findAll(@PageableDefault(size = 10) Pageable pageable) {
        return new ResponseEntity<>(iStudentService.findAllPage(pageable), HttpStatus.OK);
    }
//
//    @PostMapping
//    public ResponseEntity<?> createStudent(@RequestBody Student student,
//                                           @RequestPart(required = false) MultipartFile image) {
//        String avatar;
//        try {
//            if (image != null && !image.isEmpty()) {
//                avatar = image.getOriginalFilename();
//                FileCopyUtils.copy(image.getBytes(), new File(upload + avatar));
//                student.setAvatar("/image/" + avatar);
//            } else {
//                student.setAvatar("/image/default.jpg");
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        student.setAvgPoint((student.getChemistry()+student.getPhysical()+student.getMaths())/3);
//        iStudentService.save(student);
//        return new ResponseEntity<>(HttpStatus.ACCEPTED);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<?> updateStudent(@PathVariable Long id, @RequestPart Student student,
//                                           @RequestPart(required = false) MultipartFile image) {
//        Optional<Student> studentOptional = iStudentService.findOne(id);
//        if (studentOptional.isPresent()) {
//            String avatar;
//            try {
//                if (image != null && !image.isEmpty()) {
//                    avatar = image.getOriginalFilename();
//                    FileCopyUtils.copy(image.getBytes(), new File(upload + avatar));
//                    student.setAvatar("/image/" + avatar);
//                } else {
//                    student.setAvatar(studentOptional.get().getAvatar());
//                }
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            student.setId(id);
//            student.setAvgPoint((student.getChemistry()+student.getPhysical()+student.getMaths())/3);
//            iStudentService.save(student);
//            return new ResponseEntity<>(HttpStatus.ACCEPTED);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }


    @PostMapping
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) {
        student.setAvgPoint((student.getChemistry()+student.getPhysical()+student.getMaths())/3);
        iStudentService.save(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
        Optional<Student> studentOptional = iStudentService.findOne(id);
        if (!studentOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        student.setId(id);
        student.setAvgPoint((student.getChemistry()+student.getPhysical()+student.getMaths())/3);
        iStudentService.save(student);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Student>> deleteStudent(@PathVariable Long id) {
        Optional<Student> student = iStudentService.findOne(id);
        if (student.isPresent()) {
            iStudentService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Student>> findOneStudent(@PathVariable Long id) {
        return new ResponseEntity<>(iStudentService.findOne(id), HttpStatus.OK);
    }

}
