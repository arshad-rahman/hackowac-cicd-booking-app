\# Terraform Infrastructure Blueprint



This folder contains a Terraform blueprint for deploying the HackoWac CI/CD Booking App to AWS.



\## Scope



This infrastructure design includes:



\- VPC

\- public subnet

\- internet gateway

\- route table

\- security group

\- EC2 application host



\## Purpose



This Terraform configuration is intended to serve as an infrastructure blueprint for the containerized application and the Ansible-based deployment workflow in this repository.



\## Notes



\- This Terraform code is included as a deployable AWS design reference.

\- It is not presented as a claim of a live production deployment.

\- Sensitive values and environment-specific values should be supplied through a non-committed tfvars file.

