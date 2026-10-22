import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegPaperPlane } from 'react-icons/fa';
import {
  FooterWrapper,
  FooterContainer,
  FooterTop,
  FooterCol,
  ColumnTitle,
  FooterList,
  FooterListItem,
  StyledFooterLink,
  NewsletterText,
  NewsletterForm,
  EmailInput,
  SubmitButton,
  Divider,
  FooterBottom,
  CopyrightText,
  SocialIcons,
  SocialIconLink
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          
          <FooterCol>
            <ColumnTitle>CONTACT DETAIL</ColumnTitle>
            <FooterList>
              <FooterListItem>123 Business Street, Suite 100,<br />New York, NY 10001</FooterListItem>
              <FooterListItem>Phone: +1 234 567 8900</FooterListItem>
              <FooterListItem>Email: info@dkust.com</FooterListItem>
            </FooterList>
          </FooterCol>
          
          <FooterCol>
            <ColumnTitle>QUICK LINKS</ColumnTitle>
            <FooterList>
              <FooterListItem><StyledFooterLink to="/about">About Us</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/services">Services</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/portfolio">Portfolio</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/blog">Blog</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/contact">Contact Us</StyledFooterLink></FooterListItem>
            </FooterList>
          </FooterCol>
          
          <FooterCol>
            <ColumnTitle>OUR SERVICES</ColumnTitle>
            <FooterList>
              <FooterListItem><StyledFooterLink to="/services/web">Web Development</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/services/ml">Machine Learning</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/services/robotics">Robotics</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/services/consulting">Industrial Consulting</StyledFooterLink></FooterListItem>
              <FooterListItem><StyledFooterLink to="/services/analytics">Data Analytics</StyledFooterLink></FooterListItem>
            </FooterList>
          </FooterCol>
          
          <FooterCol>
            <ColumnTitle>SUBSCRIBE NEWSLETTER</ColumnTitle>
            <NewsletterText>Get the latest updates and news.</NewsletterText>
            <NewsletterForm onSubmit={(e) => e.preventDefault()}>
              <EmailInput type="email" placeholder="Email Address" required />
              <SubmitButton type="submit" aria-label="Subscribe">
                <FaRegPaperPlane />
              </SubmitButton>
            </NewsletterForm>
          </FooterCol>

        </FooterTop>
      </FooterContainer>
      
      <FooterContainer>
        <Divider />
      </FooterContainer>
      
      <FooterContainer>
        <FooterBottom>
          <CopyrightText>Copyright &copy; DKUST | All Rights Reserved</CopyrightText>
          
          <SocialIcons>
            <SocialIconLink href="#fb" aria-label="Facebook"><FaFacebookF /></SocialIconLink>
            <SocialIconLink href="#tw" aria-label="Twitter"><FaTwitter /></SocialIconLink>
            <SocialIconLink href="#in" aria-label="LinkedIn"><FaLinkedinIn /></SocialIconLink>
            <SocialIconLink href="#ig" aria-label="Instagram"><FaInstagram /></SocialIconLink>
          </SocialIcons>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;