# Terraform Infrastructure Documentation

This document outlines the structure and usage of the Terraform scripts used for the infrastructure of the Hackowac CI/CD Booking Application.

## Overview
The Terraform scripts provide an automated way to provision and manage cloud resources needed for the application deployment.

## Directory Structure
- `modules/` - Contains reusable modules for organizing infrastructure components.
  - `network/` - Defines the networking resources.
  - `compute/` - Defines compute resources (e.g., EC2, VM instances).

- `main.tf` - The main entry point for provisioning.
- `variables.tf` - Contains variable definitions for parameterizing the infrastructure.
- `outputs.tf` - Specifies the outputs from the Terraform configuration.

## Usage
1. **Install Terraform**: Ensure you have Terraform installed on your machine.
2. **Initialize**: Run `terraform init` to initialize the Terraform configuration.
3. **Plan**: Execute `terraform plan` to see the resources that will be created.
4. **Apply**: Use `terraform apply` to create the resources specified in the configuration.
5. **Destroy**: When you need to tear down the infrastructure, run `terraform destroy`.

## Best Practices
- Use version control for your Terraform scripts to track changes and maintain history.
- Organize resources into modules for better management and reuse.
- Maintain separate environments for development, staging, and production.

## Additional Resources
- [Terraform Documentation](https://www.terraform.io/docs)
- [HashiCorp Learn](https://learn.hashicorp.com/terraform)