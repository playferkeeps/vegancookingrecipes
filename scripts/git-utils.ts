/**
 * Git utilities for recipe image management
 * 
 * This module provides functions to commit and push recipe images to git
 * in a controlled, non-duplicating manner.
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

/**
 * Commit and push recipe images to git
 * Only targets the public/recipe-images directory to avoid pushing in-flight changes
 * 
 * @param recipeCount - Number of recipes that were generated (for commit message)
 * @returns Object with success status and details
 */
export async function commitAndPushRecipeImages(recipeCount: number): Promise<{
  success: boolean;
  filesCommitted: number;
  message?: string;
  error?: string;
}> {
  const recipeImagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  
  // Check if directory exists
  if (!fs.existsSync(recipeImagesDir)) {
    return {
      success: false,
      filesCommitted: 0,
      message: 'Recipe images directory does not exist',
    };
  }
  
  try {
    // Check git status for the recipe-images directory only
    let gitStatus: string;
    try {
      gitStatus = execSync(
        `git status --porcelain public/recipe-images/`,
        { encoding: 'utf-8', cwd: process.cwd() }
      ).trim();
    } catch (error: any) {
      // Git command might fail if not in a git repo or if directory is not tracked
      return {
        success: false,
        filesCommitted: 0,
        message: 'Not a git repository or recipe-images not tracked',
      };
    }
    
    if (!gitStatus) {
      return {
        success: true,
        filesCommitted: 0,
        message: 'No new or modified recipe images to commit',
      };
    }
    
    // Count how many files are new/modified
    const changedFiles = gitStatus.split('\n').filter(line => line.trim()).length;
    
    // Add only the recipe-images directory
    execSync(
      `git add public/recipe-images/`,
      { encoding: 'utf-8', cwd: process.cwd(), stdio: 'inherit' }
    );
    
    // Commit with descriptive message
    const commitMessage = `Add ${recipeCount} new recipe image(s) (${changedFiles} file${changedFiles > 1 ? 's' : ''})`;
    execSync(
      `git commit -m "${commitMessage}"`,
      { encoding: 'utf-8', cwd: process.cwd(), stdio: 'inherit' }
    );
    
    // Push to remote
    execSync(
      `git push`,
      { encoding: 'utf-8', cwd: process.cwd(), stdio: 'inherit' }
    );
    
    return {
      success: true,
      filesCommitted: changedFiles,
      message: `Successfully committed and pushed ${changedFiles} recipe image(s) to git`,
    };
  } catch (error: any) {
    return {
      success: false,
      filesCommitted: 0,
      error: `Git operation failed: ${error.message}`,
    };
  }
}

/**
 * Check if there are any uncommitted recipe images
 */
export function hasUncommittedRecipeImages(): boolean {
  const recipeImagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  
  if (!fs.existsSync(recipeImagesDir)) {
    return false;
  }
  
  try {
    const gitStatus = execSync(
      `git status --porcelain public/recipe-images/`,
      { encoding: 'utf-8', cwd: process.cwd() }
    ).trim();
    
    return gitStatus.length > 0;
  } catch (error) {
    return false;
  }
}

