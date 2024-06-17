import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectPage = ({ project }) => {
  const { title, user, imageUrl, description, tags, fundedAmount, helpersCount, readyPercent } = project;

  return (
      <div className="main">
        <div className="project__page-wrap container">
          <div className="banner__textblock">
            <h1 className="project__page-title">{project.title}</h1>
            <span className="project__subtitle">by {user.fullName}</span>
          </div>
          <div className="project__stats-and-gallery">
            <div className="project__gallery-wrap">
              <img className="project__gallery-main" src={imageUrl} alt="" />
              <div className="project__gallery-preview">
                <img className="project__gallery-img" src={imageUrl} alt="" />
              </div>
            </div>
            <div className="project__stats-wrap">
              <div className="project__stats-title">
                <h4>Stats</h4>
              </div>
              <div className="progress-bar">
                <div className="progress-value" style={{ width: `${readyPercent}%` }}>
                  <span className="progress-days">{readyPercent}%</span>
                </div>
              </div>
              <div className="project__stats-item-wrap">
                <div className="project__stats-item">
                  <span className="stats-value progress-percent stats-item_title">{readyPercent}%</span>
                  <span className="stats-subtitle">ready</span>
                </div>
                <div className="project__stats-item">
                  <span className="stats-item_title stats-helped_count">{helpersCount}</span>
                  <span className="stats-subtitle">helped</span>
                </div>
                <div className="project__stats-item">
                  <span className="stats-item_title stats-money_funded">{fundedAmount}$</span>
                  <span className="stats-subtitle">funded</span>
                </div>
              </div>
              <div className="project__btns">
                <button className="button button--project__page-fund">Fund this project</button>
                <button className="button button--project__page-favorite">❤</button>
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src="./images/content/bannerexample.png" alt="" />
          </div>
          <div className="project__description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className="project__tags-wrap">
            {tags && tags.split(',').map((tag, index) => (
              <div key={index} className="project__tags">
                <p>{tag.trim()}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="whitebgcontainer" />
      </div>
  );
};

export default ProjectPage;