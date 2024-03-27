import os
import watchtower
import logging

#TODO FIX THIS

CONSOLE_LOGGER_LEVEL = logging.DEBUG if (os.environ.get("LOGGER_LEVEL", "") != "DEBUG") else logging.INFO
LOGGER_LEVEL = logging.DEBUG if (os.environ.get("LOGGER_LEVEL", "") != "DEBUG") else logging.INFO
EGO_LOGGER_LEVEL = 100  # logging.ERROR

class BOIL_Handler(logging.StreamHandler):
    def __init__(self):
        super().__init__()

def initialize_logger(logger_level, console_logger_level, custom_logger_level):
    formatter = logging.Formatter("[%(asctime)s] %(levelname)s: %(message)s")
    logger = logging.getLogger(__name__)
    logger.setLevel(logger_level)

    console_handler = logging.StreamHandler()
    console_handler.setLevel(console_logger_level)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)

    function_name = os.environ.get("AWS_LAMBDA_FUNCTION_NAME", "unknown_function")

    log_group_name = f'/aws/lambda/{function_name}'
    stream_name = function_name

    cloudwatch_handler = watchtower.CloudWatchLogHandler(log_group=log_group_name, stream_name=stream_name)
    cloudwatch_handler.setLevel(custom_logger_level)
    cloudwatch_handler.setFormatter(formatter)
    logger.addHandler(cloudwatch_handler)

    logger.propagate = False

    return formatter, logger, console_handler

_, logger, _ = initialize_logger(LOGGER_LEVEL, CONSOLE_LOGGER_LEVEL, EGO_LOGGER_LEVEL)
