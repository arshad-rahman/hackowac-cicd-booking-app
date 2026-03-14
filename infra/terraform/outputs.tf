output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.this.id
}

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = aws_subnet.public.id
}

output "security_group_id" {
  description = "ID of the application host security group"
  value       = aws_security_group.app_host.id
}

output "instance_public_ip" {
  description = "Public IP of the application host"
  value       = aws_instance.app_host.public_ip
}

output "instance_public_dns" {
  description = "Public DNS of the application host"
  value       = aws_instance.app_host.public_dns
}