package com.example.student.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String avatar;
    @Min(value = 18)
    @Max(value = 60)
    private int age;
    private double avgPoint;
    private double maths;
    private double physical;
    private double chemistry;
    @Column(unique = true)
    private String email;
    private String address;
}
