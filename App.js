import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import BlogPage from './BlogPage';
import AboutMePage from './AboutMePage';
import ReviewsPage from './ReviewsPage';
import RecipesPage from './RecipesPage';
import MustTryPage from './MustTryPage';
import BlogPosts from './BlogPosts';
import CreateAccountPage from './CreateAccountPage';
import MustTryItemDetailPage from './MustTryItemDetailPage';
import PrivacyPage from './PrivacyPage';
import { AuthProvider } from './AuthContext'; // Correct the import

function App() {
    return (
        <Router>
            <div>
                <AuthProvider> {/* Ensure AuthProvider wraps your entire application */}
                    <Navbar />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/aboutme" component={AboutMePage} />
                        <Route path="/recipes" component={RecipesPage} />
                        <Route path="/blogs" component={BlogPage} />
                        <Route path="/res_review" component={ReviewsPage} />
                        <Route path="/must_try" component={MustTryPage} />
                        <Route path="/create-account" component={CreateAccountPage} />
                        <Route path="/musttry/:id" component={MustTryItemDetailPage} />
                        <Route path="/privacy" component={PrivacyPage} />
                        <Route path="/blogposts" component={BlogPosts} />
                    </Switch>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;
