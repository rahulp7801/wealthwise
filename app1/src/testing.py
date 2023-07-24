from bardapi import Bard

token = 'YggJ-puM3oOTP1xvhMbFpYE1jxMMkB45FK8WZxUzTKnL1nt12-s7KDXzHa1NQOo8UeVf5w.'
bard = Bard(token=token)

print(bard.get_answer(f"how much is tesla worth"))