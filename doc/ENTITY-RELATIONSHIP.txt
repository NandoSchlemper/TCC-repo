# Business Rules

## Entity

woman (
  full_name VARCHAR(65) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  PRIMARY KEY(cpf)
);

man (
  full_name VARCHAR(65) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  PRIMARY KEY(cpf)
);

pregnant (
  woman_ID VARCHAR(11) NOT NULL,
  pregnant_ID INT AUTO_INCREMENT NOT NULL,
  prenatal_consultations INT NOT NULL,
  sifilis_test INT NOT NULL,
  HIV_test INT NOT NULL,
  visit_tooths_doctor INT NOT NULL,
  cipatology_collection_inAPS INT NOT NULL,
  PRIMARY KEY(pregnant_ID),
  FOREIGN KEY(woman_ID) REFERENCES woman(cpf)
);

child (
  full_name VARCHAR(65) NOT NULL
  cpf VARCHAR(11) NOT NULL,
  father_ID VARCHAR(65) NOT NULL,
  mother_ID VARCHAR(65) NOT NULL,
  birth year DATE NOT NULL,
  diphtheria_vaccine INT NOT NULL,
  tetanus_vaccine INT NOT NULL,
  pertussis_vaccine INT NOT NULL,
  HepatitisB_vaccine INT NOT NULL,
  haemophilus_influenzae_typeB_vaccine INT NOT NULL,
  inactivated_polio_vaccine INT NOT NULL,
  PRIMARY KEY(cpf),
  FOREIGN KEY(father_ID) REFERENCES main(cpf),
  FOREIGN KEY(mother_ID) REFERENCES woman(cpf)
);

person (
  person_ID INT AUTO_INCREMENT NOT NULL,
  man_ID VARCHAR(11),
  woman_ID VARCHAR(11),
  child_ID VARCHAR(11),
  hypertension INT NOT NULL,
  consultation INT NOT NULL,
  blood_pressure_measurement INT NOT NULL,
  diabete INT NOT NULL,
  consultation INT NOT NULL,
  glycated_haemoglobin INT NOT NULL,
  PRIMARY KEY(person_ID),
  FOREIGN KEY(man_ID) REFERENCES man(cpf),
  FOREIGN KEY(woman_ID) REFERENCES woman(cpf),
  FOREIGN KEY(child_ID) REFERENCES child(cpf)
);